import StoryImage from './StoryImage';
import StoryDescription from './StoryDescription';

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <StoryImage />
          <StoryDescription />
        </div>
      </div>
    </section>
  )
}
