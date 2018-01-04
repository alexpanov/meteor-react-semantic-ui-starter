export default function getPlaceholder(props) {
  const {label, placeholder} = props;
  return `${placeholder || label}...`;
}
