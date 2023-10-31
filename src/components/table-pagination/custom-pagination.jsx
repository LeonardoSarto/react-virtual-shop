import {styled} from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";


function CustomPagination(props) {

    const StyledPagination = styled(Pagination)(({theme}) => ({
    }));

    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            <StyledPagination color="sarto" shape="rounded"
                              onChange={props.onChange} page={props.page}
                              count={props.count}/>
        </div>
    );
}

export default CustomPagination;