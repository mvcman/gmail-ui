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
        },
        text: {
            color: theme.palette.primary.main,
        }
    }),
);

export default useStyles;
