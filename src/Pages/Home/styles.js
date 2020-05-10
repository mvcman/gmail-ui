import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            //alignItems: 'center',
            //justifyContent: 'center',
            width: '100%',
            height: '100%',
            zIndex: 10,
            backgroundColor: '#fff',
        },
        text: {
            color: theme.palette.primary.main,
        }
    }),
);

export default useStyles;
