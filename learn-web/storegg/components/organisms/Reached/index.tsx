import ReachedItem from '../../molecules/ReachedItem';
import Separator from '../../molecules/ReachedItem/Separator';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem reached="290M+" title="Players Top Up" />
          <Separator />
          <ReachedItem reached="12.500" title="Games Available" />
          <Separator />
          <ReachedItem reached="99,9%" title="Happy Players" />
          <Separator />
          <ReachedItem reached="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  )
}
