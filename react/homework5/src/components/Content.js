import { useDispatch, useSelector } from 'react-redux';

function Content() {
    const themeStyle = useSelector((state) => state.theme.style);
    return (
        <div style={{ ...themeStyle, height: '100px' }}>
            <p>{JSON.stringify(themeStyle)}</p>
        </div>
    );
}

export default Content;