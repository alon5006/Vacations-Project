export default function SectionTitle(props : {title:string}) {
    return <div
        style = {{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',fontSize:'32px'}}
    >  
    <h1>{props.title}</h1>
    </div>
}