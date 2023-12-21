import styles from "./Frame.module.scss";

interface FrameProps {
	id: string;
	title: string;
}

export const Frame = ({ id, title }: FrameProps) => {
	return (
		<div className={styles.container}>
			<iframe
				src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
				className={`${styles.frame}`}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
};
