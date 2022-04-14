import * as React from "react";
import { useIntl } from "react-intl";
import {
  focusNextItem,
  focusOnElement,
  focusPreviousItem,
  getFocusableElements,
} from "../helpers/focus";
import Button from "./Button";

type BarrierCategory = {
  id: number;
  parentId: number;
  name: string;
};

type Barrier = {
  id: number;
  name: string;
  barrierCategoryId: number;
};

const Filters: React.FunctionComponent<{
  setBarrierValue: (barrier: string) => void;
}> = ({ setBarrierValue }) => {
  const intl = useIntl();
  const bold = (msg: string): React.ReactNode => (
    <span data-h2-font-weight="b(700)">{msg}</span>
  );
  const parentBarrierCategories = [
    {
      id: 1,
      name: intl.formatMessage({ defaultMessage: "Disability" }),
    },
    {
      id: 2,
      name: intl.formatMessage({ defaultMessage: "Work Situation" }),
    },
  ];
  const barrierCategories: BarrierCategory[] = [
    {
      id: 1,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Autism Spectrum" }),
    },
    {
      id: 2,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Blindness" }),
    },
    {
      id: 3,
      parentId: 1,
      name: intl.formatMessage({
        defaultMessage: "Colourblind(ness)/Colour Vision Deficiency",
      }),
    },
    {
      id: 4,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Diabetes" }),
    },
    {
      id: 5,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Learning Disability" }),
    },
    {
      id: 6,
      parentId: 1,
      name: intl.formatMessage({ defaultMessage: "Mental Health Conditions" }),
    },
  ];

  const barriers: Barrier[] = [
    {
      id: 1,
      name: intl.formatMessage({
        defaultMessage: "Attentiveness/Concentration",
      }),
      barrierCategoryId: 1,
    },
    {
      id: 2,
      name: intl.formatMessage({
        defaultMessage: "Executive Function Challenges",
      }),
      barrierCategoryId: 1,
    },
    {
      id: 3,
      name: intl.formatMessage({
        defaultMessage: "Time Management Challenges",
      }),
      barrierCategoryId: 1,
    },
    {
      id: 4,
      name: intl.formatMessage({ defaultMessage: "Memory Challenges" }),
      barrierCategoryId: 1,
    },
    {
      id: 5,
      name: intl.formatMessage({ defaultMessage: "Noise sensitivity" }),
      barrierCategoryId: 1,
    },
  ];

  // List of barriers that are displayed in the barriers section.
  const [results, setResults] = React.useState<Barrier[] | null>(barriers);
  // List of categories that are displayed in the categories section.
  const [categories, setCategories] = React.useState<BarrierCategory[] | null>(
    barrierCategories,
  );
  const [activeParent, setActiveParent] = React.useState(1);
  const [activeCategory, setActiveCategory] = React.useState(1);

  const onParentBarrierCategoryClick = (id: number): void => {
    setActiveParent(id);
    setCategories(barrierCategories.filter(({ parentId }) => parentId === id));
  };
  const onBarrierCategoryClick = (id: number): void => {
    setActiveCategory(id);
    setResults(
      barriers.filter(({ barrierCategoryId }) => barrierCategoryId === id),
    );
  };

  const parentRef = React.useRef<HTMLUListElement | null>(null);
  const categoryRef = React.useRef<HTMLUListElement | null>(null);
  const barrierRef = React.useRef<HTMLUListElement | null>(null);

  const onBarrierCategoryKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    categoryId: number,
    parentId: number,
  ): void => {
    e.preventDefault();
    if (categoryRef.current && parentRef.current) {
      const categoryTabList =
        categoryRef.current.querySelectorAll<HTMLElement>(`[data-category-id]`);
      const tabableElements = parentRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), textarea, select, details, [tabindex]:not([tabindex="-1"])',
      );
      console.log(tabableElements);
      switch (e.key) {
        case "ArrowLeft":
          setCategories(null);
          focusOnElement(`[data-parent-id="${parentId}"]`);
          break;
        case "ArrowRight":
          onBarrierCategoryClick(categoryId);
          break;
        case "Enter":
          onBarrierCategoryClick(categoryId);
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

  const onBarrierKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    barrierId: number,
    categoryId: number,
    parentId: number,
  ): void => {
    e.preventDefault();
    if (barrierRef.current && parentRef) {
      const barrierElementList = getFocusableElements(barrierRef.current);
      const radio = document.getElementById(
        `barrier-${barrierId}`,
      ) as HTMLInputElement;
      switch (e.key) {
        case "ArrowLeft":
          focusOnElement(`[data-category-id="${categoryId}"]`);
          break;
        case "ArrowRight":
          radio.checked = !radio.checked;
          break;
        case "Enter":
          radio.checked = !radio.checked;
          break;
        case "ArrowUp":
          focusPreviousItem(barrierElementList);
          break;
        case "ArrowDown":
          focusNextItem(barrierElementList);
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
    if (categories && categories.length !== 0 && firstCategoryRef.current) {
      firstCategoryRef.current.focus();
    }
  }, [categories]);
  const firstBarrierRef = React.useRef<HTMLInputElement | null>(null); // first element in categories.
  React.useEffect(() => {
    if (results && results.length !== 0 && firstBarrierRef.current) {
      firstBarrierRef.current.focus();
    }
  }, [results]);

  return (
    <section
      data-h2-border="b(black, all, solid, s)"
      style={{ height: "19rem" }}
      data-h2-position="b(relative)"
    >
      <nav
        aria-label={intl.formatMessage({
          defaultMessage: "Please select a filter.",
        })}
      >
        <ul data-h2-position="b(relative)" ref={parentRef}>
          {parentBarrierCategories.map(({ id: parentId, name }) => {
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
                  onClick={() => onParentBarrierCategoryClick(parentId)}
                  aria-expanded={activeParent === parentId}
                >
                  {name}
                </Button>
                {activeParent === parentId && (
                  // BARRIER CATEGORY RESULTS
                  <>
                    {categories && categories.length > 0 ? (
                      <>
                        <ul
                          data-h2-position="b(absolute)"
                          style={{
                            top: "0",
                            left: "20%",
                            width: "40%",
                            height: "19rem",
                          }}
                          data-h2-bg-color="b(lightgray)"
                          ref={categoryRef}
                        >
                          {categories.map(({ id: categoryId, name }, index) => {
                            return (
                              <li
                                key={categoryId}
                                data-h2-margin="b(all, none)"
                                data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
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
                                  onClick={() =>
                                    onBarrierCategoryClick(categoryId)
                                  }
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
                                  aria-expanded={activeCategory === categoryId}
                                  {...(activeCategory === categoryId && {
                                    "data-h2-font-color": "b(white)",
                                  })}
                                >
                                  {name}
                                </Button>
                                {activeCategory === categoryId && (
                                  // BARRIER RESULTS
                                  <>
                                    {results && results.length > 0 ? (
                                      <div
                                        data-h2-position="b(absolute)"
                                        style={{
                                          top: "0",
                                          left: "100%",
                                          width: "100%",
                                          height: "19rem",
                                        }}
                                        {...(activeCategory === categoryId && {
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
                                                "You are currently viewing barriers related to <bold>{name}</bold>",
                                            },
                                            { bold, name },
                                          )}
                                        </p>
                                        <ul ref={barrierRef}>
                                          {results.map(
                                            (
                                              { id: barrierId, name },
                                              index,
                                            ) => {
                                              return (
                                                <li
                                                  data-h2-margin="b(all, none)"
                                                  data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                                                  key={barrierId}
                                                  data-h2-bg-color="b(darkgray)"
                                                  data-h2-font-color="b(white)"
                                                >
                                                  <input
                                                    ref={
                                                      index === 0
                                                        ? firstBarrierRef
                                                        : null
                                                    }
                                                    tabIndex={-1}
                                                    type="radio"
                                                    name="barrier"
                                                    defaultChecked={index === 0} // also set it to checked
                                                    id={`barrier-${barrierId}`}
                                                    onKeyDown={(
                                                      e: React.KeyboardEvent<HTMLInputElement>,
                                                    ) =>
                                                      onBarrierKeyDown(
                                                        e,
                                                        barrierId,
                                                        categoryId,
                                                        parentId,
                                                      )
                                                    }
                                                  />
                                                  <label
                                                    htmlFor={`barrier-${barrierId}`}
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
                                          width: "100%",
                                          height: "19rem",
                                        }}
                                      >
                                        {intl.formatMessage({
                                          defaultMessage: "No Barriers found.",
                                        })}
                                      </p>
                                    )}
                                  </>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <p
                        role="status"
                        data-h2-position="b(absolute)"
                        data-h2-font-size="b(caption) m(normal)"
                        data-h2-margin="b(all, none)"
                        data-h2-padding="b(top-bottom, xs) b(right-left, xs)"
                        data-h2-bg-color="b(lightgray)"
                        style={{
                          top: "0",
                          left: "20%",
                          width: "80%",
                          height: "19rem",
                        }}
                      >
                        {intl.formatMessage({
                          defaultMessage: "No categories found.",
                        })}
                      </p>
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

export default Filters;
