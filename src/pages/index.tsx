import Calendar from "@/component/Calendar";
import dayjs from "dayjs";

export default function HomePage() {
  return (
    <div>
      <Calendar
        value={dayjs("2024-3-4")}
        onChange={(date) => {
          console.log(date.format("YYYY-MM-DD"));
        }}
        locale="en-US"
        //
      />
    </div>
  );
}
