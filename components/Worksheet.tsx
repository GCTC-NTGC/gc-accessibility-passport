import * as React from "react";
import { useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import {
  focusNextItem,
  focusOnElement,
  focusPreviousItem,
  getFocusableElements,
} from "../helpers/focus";
import { strong } from "../helpers/format";
import Button from "./Button";
import { isEqual } from "lodash";

type Parent = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  parentId: number;
  name: string;
};

type Result = {
  id: number;
  name: string;
  categoryId: number;
  checked?: boolean;
};

interface WorksheetProps {
  parents: Parent[];
  categories: Category[];
  results: Result[];
  inputName: string;
  setResultValue: (value: string) => void;
}

const Worksheet: React.FunctionComponent<WorksheetProps> = ({
  parents,
  categories,
  results,
  inputName,
  setResultValue,
}) => {
  const intl = useIntl();
  const { register } = useFormContext();

  // List of barriers that are displayed in the barriers section.
  const [resultsState, setResultsState] = React.useState<Result[] | null>(null);
  // List of categories that are displayed in the categories section.
  const [categoriesState, setCategoriesState] = React.useState<
    Category[] | null
  >(null);
  const [activeParent, setActiveParent] = React.useState<number | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<number | null>(
    null,
  );

  const onParentCategoryClick = (id: number): void => {
    setActiveParent(id);
    console.log(categories);
    console.log(id);
    const newCategories = categories.filter(({ parentId }) => parentId === id);
    console.log(newCategories);
    if (!isEqual(categoriesState, newCategories))
      setCategoriesState(newCategories);
    setResultsState(null);
    setActiveCategory(null);
  };
  const onCategoryClick = (id: number): void => {
    setActiveCategory(id);
    setResultsState(results.filter(({ categoryId }) => categoryId === id));
  };

  const parentRef = React.useRef<HTMLUListElement | null>(null);
  const categoryRef = React.useRef<HTMLUListElement | null>(null);
  const resultRef = React.useRef<HTMLUListElement | null>(null);

  const onBarrierCategoryKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    categoryId: number,
    parentId: number,
  ): void => {
    e.preventDefault();
    if (categoryRef.current && parentRef.current) {
      const categoryTabList =
        categoryRef.current.querySelectorAll<HTMLElement>(`[data-category-id]`);
      switch (e.key) {
        case "ArrowLeft":
          setCategoriesState(null);
          focusOnElement(`[data-parent-id="${parentId}"]`);
          break;
        case "ArrowRight":
          onCategoryClick(categoryId);
          break;
        case "Enter":
          onCategoryClick(categoryId);
          break;
        case "ArrowUp":
          focusPreviousItem(categoryTabList);
          break;
        case "ArrowDown":
          focusNextItem(categoryTabList);
          break;
        case "Tab":
          focusOnElement(`[data-parent-id="${parentId + 1}"]`);
          break;
        default:
        // do nothing;
      }

      if (e.shiftKey && e.key === "Tab") {
        focusOnElement(`[data-parent-id="${parentId}"]`);
      }
    }
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    resultId: number,
    categoryId: number,
    parentId: number,
    name: string,
  ): void => {
    e.preventDefault();
    if (resultRef.current && parentRef) {
      const elementList = getFocusableElements(resultRef.current);
      const radio = document.getElementById(
        `barrier-${resultId}`,
      ) as HTMLInputElement;
      switch (e.key) {
        case "ArrowLeft":
          focusOnElement(`[data-category-id="${categoryId}"]`);
          break;
        case "ArrowRight":
          radio.checked = !radio.checked;
          setResultValue(name);
          break;
        case "Enter":
          radio.checked = !radio.checked;
          setResultValue(name);
          break;
        case "ArrowUp":
          focusPreviousItem(elementList);
          break;
        case "ArrowDown":
          focusNextItem(elementList);
          break;
        case "Tab":
          focusOnElement(`[data-parent-id="${parentId + 1}"]`);
          break;
        default:
        // do nothing;
      }

      if (e.shiftKey && e.key === "Tab") {
        focusOnElement(`[data-parent-id="${parentId}"]`);
      }
    }
  };

  const firstCategoryRef = React.useRef<HTMLButtonElement | null>(null); // first element in categories.
  React.useEffect(() => {
    if (
      categoriesState &&
      categoriesState.length !== 0 &&
      firstCategoryRef.current
    ) {
      firstCategoryRef.current.focus();
    }
  }, [categoriesState]);
  React.useEffect(() => {
    if (resultsState && resultsState.length !== 0 && resultRef.current) {
      const input =
        resultRef.current.querySelector<HTMLElement>(`input[type="radio"]`);
      input && input.focus();
    }
  }, [resultsState]);

  return (
    <section
      data-h2-border="b(black, all, solid, s)"
      data-h2-bg-color="b(lightgray)"
      style={{ overflow: "auto" }}
    >
      <nav
        aria-label={intl.formatMessage({
          defaultMessage: "Please select a filter.",
        })}
      >
        <ul
          data-h2-position="b(relative)"
          data-h2-border="b(black, right, solid, s)"
          ref={parentRef}
          style={{
            top: "0",
            width: "25%",
            height: "20rem",
          }}
        >
          {parents.map(({ id: parentId, name }) => {
            return (
              <li
                key={parentId}
                data-h2-margin="b(all, none)"
                data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                {...(activeParent === parentId && {
                  "data-h2-bg-color": "b(lightgray)",
                })}
              >
                <Button
                  data-parent-id={parentId}
                  color="white"
                  mode="inline"
                  onClick={() => onParentCategoryClick(parentId)}
                  aria-expanded={activeParent === parentId}
                  data-h2-font-style="b(underline)"
                >
                  {name}
                </Button>
                {activeParent === parentId && (
                  <>
                    {categoriesState && categoriesState.length > 0 ? (
                      <>
                        <ul
                          data-h2-position="b(absolute)"
                          data-h2-border="b(black, right, solid, s)"
                          style={{
                            top: "0",
                            left: "100%",
                            width: "100%",
                            height: "20rem",
                          }}
                          ref={categoryRef}
                        >
                          {categoriesState.map(
                            ({ id: categoryId, name }, index) => {
                              return (
                                <li
                                  key={categoryId}
                                  data-h2-margin="b(all, none)"
                                  data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                                  data-h2-border="b(black, left, solid, s)"
                                  data-h2-bg-color="b(lightgray)"
                                  {...(activeCategory === categoryId && {
                                    "data-h2-bg-color": "b(darkgray)",
                                    "data-h2-font-color": "b(white)",
                                  })}
                                >
                                  <Button
                                    innerRef={
                                      index === 0 ? firstCategoryRef : null
                                    }
                                    color="white"
                                    mode="inline"
                                    tabIndex={-1}
                                    onClick={() => onCategoryClick(categoryId)}
                                    onKeyDown={(
                                      e: React.KeyboardEvent<HTMLButtonElement>,
                                    ) =>
                                      onBarrierCategoryKeyDown(
                                        e,
                                        categoryId,
                                        parentId,
                                      )
                                    }
                                    data-category-id={categoryId}
                                    aria-expanded={
                                      activeCategory === categoryId
                                    }
                                    {...(activeCategory === categoryId && {
                                      "data-h2-font-color": "b(white)",
                                    })}
                                    data-h2-text-align="b(left)"
                                    data-h2-font-style="b(underline)"
                                  >
                                    {name}
                                  </Button>
                                  {activeCategory === categoryId && (
                                    <>
                                      {resultsState &&
                                      resultsState.length > 0 ? (
                                        <div
                                          data-h2-position="b(absolute)"
                                          style={{
                                            top: "0",
                                            left: "100%",
                                            width: "203%",
                                            height: "20rem",
                                          }}
                                          {...(activeCategory ===
                                            categoryId && {
                                            "data-h2-bg-color": "b(darkgray)",
                                          })}
                                        >
                                          <p
                                            data-h2-margin="b(all, none)"
                                            data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                                            data-h2-font-color="b(white)"
                                          >
                                            {intl.formatMessage(
                                              {
                                                defaultMessage:
                                                  "You are currently viewing {inputName}s related to <strong>{name}</strong>",
                                              },
                                              { strong, name, inputName },
                                            )}
                                          </p>
                                          <ul ref={resultRef}>
                                            {resultsState.map(
                                              ({ id: resultId, name }) => {
                                                return (
                                                  <li
                                                    data-h2-margin="b(all, none)"
                                                    data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                                                    key={resultId}
                                                    data-h2-bg-color="b(darkgray)"
                                                    data-h2-font-color="b(white)"
                                                  >
                                                    <input
                                                      {...register(inputName)}
                                                      tabIndex={-1}
                                                      type="radio"
                                                      value={name}
                                                      id={`${inputName}-${resultId}`}
                                                      onKeyDown={(
                                                        e: React.KeyboardEvent<HTMLInputElement>,
                                                      ) =>
                                                        onKeyDown(
                                                          e,
                                                          resultId,
                                                          categoryId,
                                                          parentId,
                                                          name,
                                                        )
                                                      }
                                                      onClick={() =>
                                                        setResultValue(name)
                                                      }
                                                    />
                                                    <label
                                                      htmlFor={`${inputName}-${resultId}`}
                                                    >
                                                      {name}
                                                    </label>
                                                  </li>
                                                );
                                              },
                                            )}
                                          </ul>
                                        </div>
                                      ) : (
                                        resultsState?.length === 0 && (
                                          <p
                                            role="status"
                                            data-h2-position="b(absolute)"
                                            data-h2-font-size="b(caption) m(normal)"
                                            data-h2-margin="b(all, none)"
                                            data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                                            data-h2-bg-color="b(darkgray)"
                                            data-h2-font-color="b(white)"
                                            style={{
                                              top: "0",
                                              left: "100%",
                                              width: "203%",
                                              height: "20rem",
                                            }}
                                          >
                                            {intl.formatMessage({
                                              defaultMessage:
                                                "No Barriers found.",
                                            })}
                                          </p>
                                        )
                                      )}
                                    </>
                                  )}
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </>
                    ) : (
                      categoriesState?.length === 0 && (
                        <p
                          role="status"
                          data-h2-position="b(absolute)"
                          data-h2-font-size="b(caption) m(normal)"
                          data-h2-margin="b(all, none)"
                          data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                          data-h2-bg-color="b(lightgray)"
                          style={{
                            top: "0",
                            left: "100%",
                            width: "203%",
                            height: "20rem",
                          }}
                        >
                          {intl.formatMessage({
                            defaultMessage: "No categories found.",
                          })}
                        </p>
                      )
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Worksheet;
