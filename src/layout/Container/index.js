import El from "../../library/El";

const Container = (child) => {
    return (El({
        element:'div',
        className:'w-12/12',
        child,
    }) );
}
 
export default Container;