export default function Logo(props) {
  const text = props.alt;
  return (
    <>
      <img src={props.src} height={props.height | 64} alt={text} title={text} />
    </>
  );
}
