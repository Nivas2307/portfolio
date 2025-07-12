import { BounceLoading } from "respinner"
const Loader = () => {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        height:"100%",
        justifyContent:"center",
        minHeight:"100vh",
        width: "100%",
        position: "fixed",
        top: "0",
        left:"0",
        zIndex:500,
        background:"var(--bg-base)",
        
    }}
    >
        <BounceLoading fill=" #3498DB"/>
    </div>
  )
}

export default Loader;

