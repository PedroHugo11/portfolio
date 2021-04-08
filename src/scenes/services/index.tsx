import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


import ImgJs from 'src/assets/services/js.png';
import ImgJava from 'src/assets/services/java.png';
import ImgEslint from 'src/assets/services/eslint.png';
import ImgFigma from 'src/assets/services/figma.png';
import ImgGit from 'src/assets/services/git.png';
import ImgHtml from 'src/assets/services/html.png';
import ImgIllustrator from 'src/assets/services/illustrator.png';
import ImgPhotoshop from 'src/assets/services/photoshop.png';
import ImgPhp from 'src/assets/services/php.png';
import ImgReact from 'src/assets/services/react.png';
import ImgPython from 'src/assets/services/python.png';
import ImgCss from 'src/assets/services/css.png';
import ImgMysql from 'src/assets/services/mysql.png';
import ImgFlutter from 'src/assets/services/flutter.png';
import ImgPostGreSQL from 'src/assets/services/postgresql.png';

import {
  Container,
  ContentContainer,
  TitleContainer,
  SubTitle,
  ImageContainer,
  ImageService,
} from './styles';


// import { Container } from './styles';

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    display: 'flex' ,
    flexDirection: 'column',
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Services: React.FC = () => {
  return (
    <Container id="services">
      <ContentContainer>
        <TitleContainer>Services</TitleContainer>
        <SubTitle>
          Since 2014 learning and working with programming in different
          languages ​​and projects, since 2017 i have focused on Web
          Programming, the Front-end being my best specialty. (Hover your mouse over the images).
        </SubTitle>
        <ImageContainer>
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">PHP</Typography>
              <b>{'95% Domain'}</b> <u>{'About PHP:'}</u>{' '}
              {"PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgPhp} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">React JS</Typography>
              <b>{'70% Domain'}</b> <u>{'About React JS:'}</u>{' '}
              {"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React can also render on the server using Node and power mobile apps using React Native."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgReact} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Node.js</Typography>
              <b>{'75% Domain'}</b> <u>{'About Node.js:'}</u>{' '}
              {"As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgJs} />
          </HtmlTooltip>  
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Flutter</Typography>
              <b>{'83% Domain'}</b> <u>{'About Flutter:'}</u>{' '}
              {"Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgFlutter} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">MySQL</Typography>
              <b>{'89% Domain'}</b> <u>{'About MySQL:'}</u>{' '}
              {"MySQL is an open source relational database management system used in most free applications to manage your databases."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgMysql} />  
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Postgres DB</Typography>
              <b>{'75% Domain'}</b> <u>{'About Postgres DB:'}</u>{' '}
              {"PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgPostGreSQL} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Python</Typography>
              <b>{'80% Domain'}</b> <u>{'About Python:'}</u>{' '}
              {"Python is a programming language that lets you work quickly and integrate systems more effectively."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgPython} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Java</Typography>
              <b>{'90% Domain'}</b> <u>{'About Java:'}</u>{' '}
              {"Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgJava} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Eslint</Typography>
              <b>{'95% Domain'}</b> <u>{'About Eslint:'}</u>{' '}
              {"ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:"}
            </React.Fragment>
          }
          >
            <ImageService src={ImgEslint} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">HTML5</Typography>
              <b>{'96% Domain'}</b> <u>{'About HTML5:'}</u>{' '}
              {"HTML stands for Hyper Text Markup Language. HTML is the standard markup language for Web pages. HTML elements are the building blocks of HTML pages. HTML elements are represented by <> tags."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgHtml} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">CSS3</Typography>
              <b>{'93% Domain'}</b> <u>{'About CSS3:'}</u>{' '}
              {"CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgCss} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">GIT</Typography>
              <b>{'60% Domain'}</b> <u>{'About GIT:'}</u>{' '}
              {"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgGit} />
          </HtmlTooltip>
          
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Photoshop</Typography>
              <b>{'90% Domain'}</b> <u>{'About Photoshop:'}</u>{' '}
              {"From photo editing and composition to digital painting, animation and graphic design, you can create what you can imagine in Photoshop."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgPhotoshop} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Illustrator</Typography>
              <b>{'85% Domain'}</b> <u>{'About Illustrator:'}</u>{' '}
              {"Adobe Illustrator is the standard vector graphics software used by millions of designers and artists to create everything from stunning images for the web and mobile devices to logos, icons, book illustrations, product packaging and billboards."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgIllustrator} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Figma</Typography>
              <b>{'75% Domain'}</b> <u>{'About Figma:'}</u>{' '}
              {"Figma is a vector graphic editor and prototyping of design projects based mainly on the web browser, with additional offline tools for desktop applications for GNU / Linux, macOS and Windows."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgFigma} />
          </HtmlTooltip>
          
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default Services;
