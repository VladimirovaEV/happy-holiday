import { useState, useContext } from "react";
import style from "./Choices.module.css";
import { holidaysContext } from "../../../context/holidaysContext";

const holidays = {
newyear: 'Новый год',
birthdayWomen: 'День рождения  Ж',
birthdayMen: 'День рождения  М',
womenday: 'Выбрать праздник',
knowledgeday: 'День знаний',
}
const Choices = () => {
    const [isOpenChoices, setIsOpenChoices] = useState(false);
    const {holiday, setHoliday} = useContext(holidaysContext);
    const toggleChoices = () => {
        setIsOpenChoices(!isOpenChoices);
    };
    const changeHoliday = title => {
        setHoliday(title);
        toggleChoices();
    }
    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleChoices}>{holiday}</button>
            {isOpenChoices && (
                    <ul className={style.list}>
                {Object.entries(holidays).map(item => (
                    <li
                        className={style.item}
                        key={item[0]}
                        onClick={() => {
                            changeHoliday(item[1])
                        }}
                    >
                        {item[1]}
                    </li>
                ))}
            </ul>
            )
            }
        </div>
    )
};

export default Choices;