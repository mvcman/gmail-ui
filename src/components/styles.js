import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        navbar: {
            width: '100%',
            height: '10%',
            //backgroundColor: theme.palette.primary.light,
            position: 'fixed',
            borderBottom: '1px solid #E5E7E9',
            top: 0,
            left: 0,
            zIndex: 99,
        },
        sidebar: {
            width: '70px',
            height: '90vh',
            backgroundColor: '#fff',
            position: 'fixed',
            top: '10%',
            left: 0,
            zIndex: 55,
            '&:hover': {
                cursor: 'pointer',
                width: '250px',
                zIndex: 55,
            },
        },
        topbar: {
            width: '100%',
            height: '50px',
            position: 'absolute',
            borderBottom: '1px inset #E5E7E9',
            backgroundColor: '#EAEDED',
            top: 0,
            left: 0,
            zIndex: 33,
        },
        rightbar: {
            width: '50px',
            height: '90vh',
            borderLeft: '1px solid #E5E7E9',
            backgroundColor: '#fff',
            position: 'fixed',
            top: '10%',
            right: 0,
            zIndex: 55,
        },
    }),
);

export default useStyles;
