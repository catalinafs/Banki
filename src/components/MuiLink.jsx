import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

/**
 * Returns one styled component, `MuiLink`, a custom react-router-dom link styled with Material UI.
 *
 * @returns An styled component.
 *
 * @param text - A string containing the text to be displayed in the component.
 * @param styles - A required object, which contains the styles to customize the link.
 * @param navigateTo - A string that contains the route to which the user will be redirected when they click on the link.
 *
 * @example
 * 
 * <MuiLink 
 *   styles={{
 *     color: '#252525',
 *     textDecoration: 'none',
 *     fontSize: '20px',
 *   }}
 * />
 * 
**/

const defaultText = 'Styled Link';
const defaultStyles = {
    color: '#3d3d3d',
    fontFamily: 'Glacial Indifference',
    textDecoration: 'none',
};
const defaultNavigateTo = '/';

// Custom MuiLink component
const MuiLink = ({ text = defaultText, styles = defaultStyles, navigateTo = defaultNavigateTo }) => {
    // Create a styled component using the Link component from react-router-dom
    const MuiLink = styled(Link)(styles);

    // Render the styled Link component with the provided text and navigateTo prop
    return (
        <MuiLink to={navigateTo}>
            {text}
        </MuiLink>
    );
}

export default MuiLink;
