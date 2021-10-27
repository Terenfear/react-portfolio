import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";

const AboutMe = (): JSX.Element => {
    const theme = useTheme();
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        px: 8,
        py: 4,
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            gap: 8,
            py: 16
        }
    } as const;
    const imgStyle = {
        objectFit: "contain",
        width: "100%",
        height: "100%",
        maxWidth: theme.spacing(60),
        maxHeight: theme.spacing(60)
    } as const;
    return (
        <Box sx={containerStyle}>
            <img
                style={imgStyle}
                src="https://avatars.githubusercontent.com/u/15063346?v=4"
                alt="Author"
            />
            <Box>
                <Typography variant="overline">About me</Typography>
                <Typography variant="h2" paragraph>Web Developer</Typography>
                <Typography variant="body1" paragraph>
                    Voluptate commodo aute sit magna commodo aliqua nisi commodo occaecat et eiusmod ullamco ut laboris. Ipsum nulla pariatur est dolore elit aliqua tempor nulla ipsum dolor deserunt. Exercitation et ipsum ullamco anim minim nisi adipisicing proident minim in ut sint nostrud. Nostrud duis nulla amet irure excepteur sit aute ex. Fugiat velit quis sint quis consequat consectetur velit est dolore laborum deserunt.
                </Typography>
                <Typography variant="body1" paragraph>
                    Ad consequat reprehenderit cillum id est sit culpa do laborum sunt dolore. Lorem et in amet incididunt pariatur eu ex ex incididunt ex fugiat. Aliqua deserunt ea magna occaecat esse ad ex esse. Do esse velit exercitation incididunt fugiat laboris consectetur magna elit qui amet sint nostrud tempor.
                </Typography>
            </Box>
        </Box >
    );
};

export default AboutMe;