import {
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";
import React, { RefObject } from "react";

export interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  centered?: boolean;
  footer?: React.ReactNode;
  leastDestructiveRef?: RefObject<HTMLElement> | undefined;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  title,
  centered = false,
  footer,
  children,
}) => {
  const leastDestructiveRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <div>
      {isOpen && (
        <AlertDialogOverlay
          data-h2-bg-color="b(black[.85])"
          leastDestructiveRef={leastDestructiveRef}
        >
          <AlertDialogContent
            data-h2-bg-color="b(white)"
            data-h2-margin="b(top-bottom, xxl)"
            data-h2-position="b(relative)"
            data-h2-radius="b(s)"
            data-h2-shadow="b(s)"
            className={centered ? `alert-dialog--centered` : undefined}
          >
            <div
              className="alert-dialog__header"
              data-h2-bg-color="b(blue)"
              data-h2-radius="b(s, s, none, none)"
              data-h2-padding="b(all, m)"
              data-h2-position="b(relative)"
            >
              <AlertDialogLabel>
                <h1
                  data-h2-font-color="b(white)"
                  data-h2-font-weight="b(700)"
                  data-h2-font-size="b(h3)"
                  data-h2-margin="b(all, none)"
                >
                  {title}
                </h1>
              </AlertDialogLabel>
            </div>
            <AlertDialogDescription className="alert-dialog__content">
              {children}
            </AlertDialogDescription>
            {footer ? (
              <div
                className="alert-dialog__footer"
                data-h2-margin="b(top, m)"
                data-h2-padding="b(top, m)"
                data-h2-border="b(darkgray, top, solid, s)"
              >
                {footer}
              </div>
            ) : null}
          </AlertDialogContent>
        </AlertDialogOverlay>
      )}
    </div>
  );
};

export default AlertDialog;
