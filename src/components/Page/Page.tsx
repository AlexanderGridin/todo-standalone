import { PropsWithChildren } from "react";
import style from "./Page.module.css";

export interface PageProps extends PropsWithChildren {
	title: string;
}

export const Page = ({ title, children }: PageProps) => {
	return (
		<section>
			<div className={style.header}>
				<h1 className={style.title}>{title}</h1>
			</div>

			<div className={style.content}>{children}</div>
		</section>
	);
};
