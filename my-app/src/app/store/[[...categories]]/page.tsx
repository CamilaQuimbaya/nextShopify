interface categoriesProps{
  params:{
    categories: string[],
    searchParams?: string
}}

export default function Categories(props : categoriesProps){
  console.log(props)

  const { categories }  = props.params;

  console.log(props);

  return (
    <h1>Categoria dinamica { categories }</h1>
  )
}