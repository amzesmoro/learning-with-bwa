import ListFooterItem from './ListFooterItem';

interface FooterItemProps {
  title: string;
  child_one?: string;
  child_two?: string;
  child_three?: string;
  child_four?: string;
  href_one?: string;
  href_two?: string;
  href_three?: string;
  href_four: string;
}

export default function Company(props: Partial<FooterItemProps>) {
  const { title, child_one, child_two, child_three, child_four, href_one, href_two, href_three, href_four } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        <ListFooterItem href={`${href_one}`} title={`${child_one}`} />
        <ListFooterItem href={`${href_two}`} title={`${child_two}`} />
        <ListFooterItem href={`${href_three}`} title={`${child_three}`} />
        <ListFooterItem href={`${href_four}`} title={`${child_four}`} />
      </ul>
    </div>
  )
}
