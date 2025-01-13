// Components
import CourseListItem from "src/components/courses/CourseListItem"

export default function Classes() {
    return (
      <div>
        <div className="m-16 text-lg border-b w-[70rem] border-[#CBD0DD]" >
            <h1 className="pb-2"> Classes </h1>
        </div>
        <CourseListItem date={"2025-01-12"} Time={"5:00 PM"} ClassTitle={"Class Example 123"} FacilityAddress={"123 Address Example"} />
      </div>
    )
  }
  