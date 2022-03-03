import Link from "next/link";
function EventItem(props) {
  const { title, image, date, location, id } = props;

  //formated to date 📅
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: 'numeric',
  });

  //formatted to location 🏠
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>TITLE</div>
      <div>
        <time>{humanReadableDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
export default EventItem;
