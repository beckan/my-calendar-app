import dayjs from "dayjs";
import weekDay from "dayjs/plugin/weekday";

dayjs.extend(weekDay);

const getFirstDateOfWeek = (date: dayjs.ConfigType) => {
    return dayjs(date).weekday(1);
}

export default getFirstDateOfWeek;