type itemProps = {
    date: string,
    Time: string,
    ClassTitle: string,
    FacilityAddress: string,
}

export default function CourseListItem({date, Time, ClassTitle, FacilityAddress}: itemProps) {

    // Pass Date in Format 2025-01-25
    const ParsedDate = new Date(date + "T00:00:00")

    // Individual Date Elements
    const MonthShort = ParsedDate.toLocaleString('en-US', { month: 'short' });
    const MonthLong = ParsedDate.toLocaleString('en-US', { month: 'long' });
    const Day = ParsedDate.getDate();

    return (
      <div className="flex hover:bg-slate-100 rounded p-2 w-auto">
        <div className="rounded-full w-16 h-16 bg-slate-200 inline-flex justify-center items-center flex-col leading-none" > 
            <h1 className="text-lg m-0 h-6 font-semibold" > {MonthShort} </h1> 
            <h1 className="text-xl m-0 h-7 font-semibold" > {Day} </h1> 
        </div>
        <div className="pl-5 self-center">  
            <h1 className="text-base font-semibold" > {ClassTitle} </h1>
            <h1 className="text-sm font-medium" > {MonthLong} {Day} {Time} @ {FacilityAddress} </h1>
        </div>
      </div>
    )
  }
  