import Link from "next/link";
import * as React from "react";
import { useIntl } from "react-intl";
import { strong } from "../helpers/format";

const Home: React.FunctionComponent = () => {
  const intl = useIntl();

  const employeeLinks = [
    {
      id: 1,
      en: "https://www.canada.ca/en/government/publicservice/wellness-inclusion-diversity-public-service/diversity-inclusion-public-service/accessibility-public-service/government-canada-workplace-accessibility-passport.html",
      fr: "https://www.canada.ca/fr/gouvernement/fonctionpublique/mieux-etre-inclusion-diversite-fonction-publique/diversite-equite-matiere-emploi/accessibilite-fonction-publique/passeport-accessibilite-milieu-travail-gouvernement-canada.html",
    },
    {
      id: 2,
      en: "https://www.canada.ca/content/dam/tbs-sct/documents/accessibility-publi-service/gc-workplace-accessibility-passport-document.rtf",
      fr: "https://www.canada.ca/content/dam/tbs-sct/documents/accessibility-publi-service/passeport-pour-laccessibilite-en-milieu-de-travail-du-gc-document.rtf",
    },
    {
      id: 3,
      en: "#",
      fr: "#",
    },
    {
      id: 4,
      en: "#",
      fr: "#",
    },
  ];

  const managerLinks = [
    {
      id: 1,
      en: "https://www.canada.ca/en/government/publicservice/wellness-inclusion-diversity-public-service/diversity-inclusion-public-service/accessibility-public-service/government-canada-workplace-accessibility-passport.html",
      fr: "https://www.canada.ca/fr/gouvernement/fonctionpublique/mieux-etre-inclusion-diversite-fonction-publique/diversite-equite-matiere-emploi/accessibilite-fonction-publique/passeport-accessibilite-milieu-travail-gouvernement-canada.html",
    },
    {
      id: 2,
      en: "#",
      fr: "#",
    },
    {
      id: 3,
      en: "#",
      fr: "#",
    },
  ];

  return (
    <section>
      <div data-h2-display="b(flex)" data-h2-flex-direction="b(column) s(row)">
        <div
          data-h2-border="s(darkblue, right, solid, s)"
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b(lightgray)"
          style={{ flex: 2 }}
        >
          <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
            {intl.formatMessage({
              defaultMessage: "Using the passport",
              description: "Heading for section in homepage.",
            })}
          </h2>
          <div
            data-h2-bg-color="b(white)"
            data-h2-shadow="b(l)"
            data-h2-radius="b(s)"
            style={{ width: "100%", minHeight: "23rem" }}
            data-h2-padding="b(all, m)"
          >
            <p>
              {intl.formatMessage(
                {
                  defaultMessage:
                    "Your <strong>Government of Canada (GC) Workplace Accessibility Passport</strong> provides a good place to document the barriers you might face as well as the adaptive tools and support measures that you need to succeed in your job. You will be asked to document the barriers and potential solutions in different work situations such as remote workplace, selection processes, or learning events.",
                },
                { strong },
              )}
            </p>
            <p>
              {intl.formatMessage({
                defaultMessage:
                  "For the Passport, a barrier is anything that prevents your full and equal participation in the workplace. A solution is any adaptive tool or support measure that will enable you to perform tasks effectively and efficiently.",
              })}
            </p>
            <p>
              {intl.formatMessage(
                {
                  defaultMessage:
                    "You own your <strong>GC Workplace Accessibility Passport</strong>. It is designed to:",
                },
                { strong },
              )}
            </p>
            <ol
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "decimal" }}
            >
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Your Passport can support conversations between you and your manager about what you might need",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Document the results of any consultations or assessments that help identify solutions",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Record the agreement between you and your manager about the workplace accommodation tools or measures to be provided",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Avoid the need to renegotiate workplace accommodations when you change managers or organizations throughout your public service career",
                  })}
                </p>
              </li>
            </ol>
            <p>
              {intl.formatMessage(
                {
                  defaultMessage: "To <strong>build your Passport</strong>:",
                },
                { strong },
              )}
            </p>
            <ul
              data-h2-margin="b(bottom-left, m)"
              style={{ listStyleType: "disc" }}
            >
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Start by identifying barriers and solutions. This information will be saved by the passport application.",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Review the barriers and solutions before creating an account.",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Download a Word version of your Passport, if needed.",
                  })}
                </p>
              </li>
              <li>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Create an account to store and share your Passport information.",
                  })}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-h2-padding="b(right-left, l) b(top-bottom, l)"
          data-h2-bg-color="b(lightblue)"
          style={{ flex: 1 }}
        >
          <h2 data-h2-font-size="b(h4)" data-h2-margin="b(top, none)">
            {intl.formatMessage({
              defaultMessage: "Using the GC Workplace Passport",
              description: "Heading for section in homepage.",
            })}
          </h2>
          <div>
            <div>
              <h3 data-h2-font-size="b(h5)">
                {intl.formatMessage({
                  defaultMessage: "For employees",
                  description:
                    "Heading in help and resources section for employees",
                })}
              </h3>
              <div
                data-h2-bg-color="b(white)"
                data-h2-shadow="b(l)"
                data-h2-radius="b(s)"
                style={{ width: "100%" }}
                data-h2-padding="b(all, m)"
              >
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "The GC Workplace Accessibility Passport is one of the key initiatives of the Federal Public Service Accessibility Strategy. The following resources are designed to help you create and manage your Passport. ",
                  })}
                </p>
                <ul
                  data-h2-margin="b(bottom-left, m)"
                  style={{ listStyleType: "disc" }}
                >
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>GC Workplace Accessibility Passport Canada.ca page</link>",
                          description: "Employee link text #1",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? employeeLinks.find((link) => link.id === 1)
                                      ?.en
                                  : employeeLinks.find((link) => link.id === 1)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>GC Workplace Accessibility Passport Rich Text Format Form</link>",
                          description: "Employee link text #2",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? employeeLinks.find((link) => link.id === 2)
                                      ?.en
                                  : employeeLinks.find((link) => link.id === 2)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>Library of Barriers and Solutions</link>",
                          description: "Employee link text #3",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? employeeLinks.find((link) => link.id === 3)
                                      ?.en
                                  : employeeLinks.find((link) => link.id === 3)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>Examples of Completed Passports</link>",
                          description: "Employee link text #4",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? employeeLinks.find((link) => link.id === 4)
                                      ?.en
                                  : employeeLinks.find((link) => link.id === 4)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                </ul>
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "Your Passport relates to workplace situations. Please do not include any information about medical diagnoses, conditions, or treatments.",
                  })}
                </p>
              </div>
            </div>
            <div>
              <h3 data-h2-font-size="b(h5)">
                {intl.formatMessage({
                  defaultMessage: "For Managers",
                  description:
                    "Heading in help and resources section for managers",
                })}
              </h3>
              <div
                data-h2-bg-color="b(white)"
                data-h2-shadow="b(l)"
                data-h2-radius="b(s)"
                style={{ width: "100%" }}
                data-h2-padding="b(all, m)"
              >
                <p>
                  {intl.formatMessage({
                    defaultMessage:
                      "The Government of Canada (GC) Workplace Accessibility Passport is designed to help managers create an inclusive work environment and provide the tools and measures each employee needs to succeed in their job.",
                  })}
                </p>
                <ul
                  data-h2-margin="b(bottom-left, m)"
                  style={{ listStyleType: "disc" }}
                >
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>GC Workplace Accessibility Passport Canada.ca page</link>",
                          description: "Manager link text #1",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? managerLinks.find((link) => link.id === 1)
                                      ?.en
                                  : managerLinks.find((link) => link.id === 1)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>Library of Barriers and Solutions</link>",
                          description: "Manager link text #2",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? managerLinks.find((link) => link.id === 2)
                                      ?.en
                                  : managerLinks.find((link) => link.id === 2)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {intl.formatMessage(
                        {
                          defaultMessage:
                            "<link>Examples of Completed Passports</link>",
                          description: "Manager link text #3",
                        },
                        {
                          link: (msg: string) => (
                            <a
                              href={
                                intl.locale === "en"
                                  ? managerLinks.find((link) => link.id === 3)
                                      ?.en
                                  : managerLinks.find((link) => link.id === 3)
                                      ?.fr
                              }
                            >
                              {msg}
                            </a>
                          ),
                        },
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
