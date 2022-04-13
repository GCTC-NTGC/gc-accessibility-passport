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
  const [activeParent, setActiveParent] = React.useState(0);
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onParentBarrierCategoryClick = (id: number): void => {
    setActiveParent(id);
    setCategories(barrierCategories.filter(({ parentId }) => parentId === id));
    // if (categoryRef.current) {
    //   const categoryElementList = getFocusableElements(categoryRef.current);
    //   focusOnElement(categoryElementList[0]); // focus on first element
    // }
  };
  const onBarrierCategoryClick = (id: number): void => {
    setActiveCategory(id);
    setResults(
      barriers.filter(({ barrierCategoryId }) => barrierCategoryId === id),
    );
  };

  const categoryRef = React.useRef<HTMLUListElement | null>(null);
  const onBarrierCategoryKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    categoryId: number,
    parentId: number,
  ): void => {
    e.preventDefault();
    if (categoryRef.current) {
      const categoryTabList =
        categoryRef.current.querySelectorAll<HTMLElement>(`[data-category-id]`);
      // const tabableElements = document.querySelectorAll<HTMLElement>(
      //   'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), textarea, select, details, [tabindex]:not([tabindex="-1"])',
      // );
      // console.log(tabableElements);
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
        // case "Tab":
        //   focusNextItem(tabableElements);
        //   break;
        default:
        // do nothing;
      }
    }
  };

  const barrierRef = React.useRef<HTMLUListElement | null>(null);
  const onBarrierKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    barrierId: number,
    categoryId: number,
  ): void => {
    e.preventDefault();
    if (barrierRef.current) {
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
        default:
        // do nothing;
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
      data-h2-padding="b(all, xs)"
      style={{ minHeight: "16rem", overflow: "auto" }}
      data-h2-position="b(relative)"
      data-h2-bg-color="b(lightgray)"
    >
      <nav>
        <ul>
          {parentBarrierCategories.map(({ id: parentId, name }) => {
            return (
              <li key={parentId} data-h2-margin="b(bottom, s) b(top, none)">
                <Button
                  data-parent-id={parentId}
                  color="white"
                  mode="inline"
                  onClick={() => onParentBarrierCategoryClick(parentId)}
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
                          style={{ top: "0", left: "20%" }}
                          ref={categoryRef}
                        >
                          {categories.map(({ id: categoryId, name }, index) => {
                            return (
                              <li
                                key={categoryId}
                                data-h2-margin="b(bottom, s) b(top, xs)"
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
                                          left: "120%",
                                          width: "100%",
                                        }}
                                      >
                                        <p data-h2-margin="b(bottom, s) b(top, xs)">
                                          {intl.formatMessage(
                                            {
                                              defaultMessage:
                                                "You are currently viewing barriers related to <bold>Autism Spectrum</bold>",
                                            },
                                            { bold },
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
                                                  data-h2-margin="b(bottom, s) b(top, xs)"
                                                  key={barrierId}
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
                                                    id={`barrier-${barrierId}`}
                                                    onKeyDown={(
                                                      e: React.KeyboardEvent<HTMLInputElement>,
                                                    ) =>
                                                      onBarrierKeyDown(
                                                        e,
                                                        barrierId,
                                                        categoryId,
                                                      )
                                                    }
                                                  />
                                                  <label
                                                    htmlFor={`barrier-${barrierId}`}
                                                  >
                                                    {name}
                                                  </label>
                                                  {/* <Button
                                                    innerRef={
                                                      index === 0
                                                        ? firstBarrierRef
                                                        : null
                                                    }
                                                    color="white"
                                                    mode="inline"
                                                    onClick={() =>
                                                      setBarrierValue(name)
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
                                                    data-h2-padding="b(all, none)"
                                                  >
                                                    {name}
                                                  </Button> */}
                                                </li>
                                              );
                                            },
                                          )}
                                        </ul>
                                      </div>
                                    ) : (
                                      <p
                                        role="status"
                                        data-h2-font-size="b(caption)"
                                        data-h2-position="b(absolute)"
                                        data-h2-margin="b(top-bottom, xs)"
                                        style={{
                                          top: "0",
                                          left: "120%",
                                          width: "100%",
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
                        data-h2-font-size="b(caption)"
                        data-h2-position="b(absolute)"
                        data-h2-margin="b(top-bottom, xs)"
                        style={{
                          top: "0",
                          left: "20%",
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
