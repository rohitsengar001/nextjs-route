function EventList(porps) {
  const { items } =porps;
  return (
    <ul>
      {items.map(event =><EventItem />)}
    </ul>
  );
}