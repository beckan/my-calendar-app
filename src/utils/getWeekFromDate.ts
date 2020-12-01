import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

const getWeekFromDate = (date: dayjs.ConfigType) => {
    return dayjs(date).week();
}

export default getWeekFromDate;