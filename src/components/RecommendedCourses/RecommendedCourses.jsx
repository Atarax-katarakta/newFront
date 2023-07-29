import React from 'react';
import cls from "./RecommendedCourses.module.scss"
const RecommendedCourses = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.courseCard}>
                <div className={cls.courseTitle}>Курс по Data Science</div>
                <button className={cls.learnMoreButton}>Подробнее</button>
            </div>
            <div className={cls.courseCard}>
                <div className={cls.courseTitle}>Курс по Web Development</div>
                <button className={cls.learnMoreButton}>Подробнее</button>
            </div>
            <div className={cls.courseCard}>
                <div className={cls.courseTitle}>Курс по Искусственному интеллекту</div>
                <button className={cls.learnMoreButton}>Подробнее</button>
            </div>
            <div className={cls.courseCard}>
                <div className={cls.courseTitle}>Курс по Маркетингу и рекламе</div>
                <button className={cls.learnMoreButton}>Подробнее</button>
            </div>

        </div>
    );
};

export default RecommendedCourses;