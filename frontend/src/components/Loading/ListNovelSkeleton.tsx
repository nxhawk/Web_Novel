import TitleTab from "../TitleTab"
import BoxNovel from "../Novel/BoxNovel"

const ListNovelSkeleton = () => {
  return (
    <div>
      <TitleTab name="DANH SÁCH TRUYỆN" link="/"/>
      <div className="grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2">
        {
          [1, 2, 3, 4].map((idx) =>
            <BoxNovel isLoading={true} key={idx}/>
          )
        }
      </div>
    </div>
  )
}

export default ListNovelSkeleton