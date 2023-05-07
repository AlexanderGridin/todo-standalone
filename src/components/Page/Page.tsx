import { CloseButton } from "components/buttons";
import { PropsWithChildren } from "react";
import style from "./Page.module.css";

export interface PageProps extends PropsWithChildren {
  title: string;
  onClose?: () => void;
}

export const Page = ({ title, onClose, children }: PageProps) => {
  return (
    <section className={style.wrapper}>
      <header className={style.header}>
        {onClose ? (
          <div className={style.closeButton}>
            <CloseButton tooltipText="Close" onClick={onClose} />
          </div>
        ) : null}

        <div className="container" style={{ padding: "0 75px" }}>
          <h1 className="page-title">{title}</h1>
        </div>
      </header>

      <div className={style.content}>
        <div className="container">{children}</div>
      </div>
    </section>
  );
};
