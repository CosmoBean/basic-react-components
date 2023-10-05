// the children prop will basically pass down the children text in wrapped within the custom Button Prop
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
    children,
    rounded, 
    outline,
    primary, 
    secondary, 
    success, 
    warning,
    danger,
    ...rest
}) {
    const classes = twMerge(className(rest.className, 'flex items-center px-3 py-1.5 border border-2', {
        'border-blue-600 bg-blue-400': primary,
        'border-gray-900 bg-gray-900': secondary,
        'border-green-500 bg-green-400': success,
        'border-yellow-600 bg-yellow-400': warning,
        'border-red-600 bg-red-400': danger,
        'rounded-full': rounded,
        'text-white': !outline && (primary || secondary || success || warning || danger),
        'bg-white': outline,
        'text-blue-600': outline && primary, 
        'text-gray-900': outline && secondary,
        'text-green-600': outline && success,
        'text-yellow-600': outline && warning,
        'text-red-600': outline && danger,
    }))

    // ...rest is the rest of the props that are passed down which would be underlying props that the base element supports
    // examples of these props would be something like onClick, onMouseOver, onMouseOut, onMouseDown, onMouseUp, etc
    
    return (
        <button {...rest} className={classes}>
        {children}
        </button>
)};


//prop types validation to make sure only one variation is passed into props
Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger})=>{
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if(count > 1){
            throw new Error("Only one variation is allowed");
        }
    }
}

export default Button;