const Title = ({text}:{text:string}) => {
  return (
    <>
      <h1 className="title">{text|| 'Our Menu'}</h1>
      <div className="title-underline"></div>
    </>
  )
}
export default Title 