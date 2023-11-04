export default function Square({ size = 's' }) {
  const dims = (size === 's' ? 25 : (size === 'm' ? 50 : (size === 'b' ? 75 : console.warn('wot on square size'))));
  return <div 
    className="square"
    style={{
      backgroundColor: 'white',
      height: `${dims}px`,
      width: `${dims}px`
    }}
  />
}