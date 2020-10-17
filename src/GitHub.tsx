import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

function GitHubIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: "middle",
      marginRight: theme.spacing(1),
    },
  })
);

export default function GitHub() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.root} color="textSecondary">
        This demo app runs the C++ code displayed below compiled to WebAssembly.
      </Typography>
      <Typography className={classes.root} color="textSecondary">
        Check out the repository on GitHub for more info.
      </Typography>
      <Typography className={classes.root} color="textSecondary">
        <GitHubIcon className={classes.lightBulb} />
        <Link href="https://github.com/jtpio/xtl-wasm">
          https://github.com/jtpio/xtl-wasm
        </Link>
      </Typography>
    </>
  );
}