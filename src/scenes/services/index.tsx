import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


import ImgTypescript from 'src/assets/services/typescript.png';
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
import ImgBootstrap from 'src/assets/services/Bootstrap.png';
import ImgDotnet from 'src/assets/services/dotnet.png';
import ImgAngular from 'src/assets/services/angular.png';
import ImgPlaywright from 'src/assets/services/playwright.png';

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
        <TitleContainer>Skills</TitleContainer>
        <SubTitle>
        Over the past 10 years of learning many languages and coding in dev teams, in the last year i have been moving towards the goal of becoming a senior developer, always learning new stuff and challenging myself in new projects. (Hover your mouse over the images).  
        </SubTitle>
        <ImageContainer>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">.NET</Typography>
              <b>{'Advanced'}</b> <u>{'About .NET 6:'}</u>{' '}
              {"Create beautiful apps and scalable cloud services, faster and easier with the free, open-source platform that's loved by developers and trusted by organizations."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgDotnet} />
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">React JS</Typography>
              <b>{'Intermediate'}</b> <u>{'About React JS:'}</u>{' '}
              {"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React can also render on the server using Node and power mobile apps using React Native."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgReact} />
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Typescript</Typography>
              <b>{'Intermediate'}</b> <u>{'About Typescript:'}</u>{' '}
              {"TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgTypescript} />
        </HtmlTooltip> 
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">PHP</Typography>
              <b>{'Intermediate'}</b> <u>{'About PHP:'}</u>{' '}
              {"PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgPhp} />
        </HtmlTooltip> 
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Angular</Typography>
              <b>{'Intermediate'}</b> <u>{'About Angular:'}</u>{' '}
              {"Angular is a popular open-source web application framework developed by Google. It is used to build dynamic, single-page applications (SPAs) using TypeScript."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgAngular} />
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Playwright</Typography>
              <b>{'Intermediate'}</b> <u>{'About Playwright:'}</u>{' '}
              {"Playwright is an open-source end-to-end testing framework developed by Microsoft. Playwright supports multiple languages (JavaScript, TypeScript, Python, Java, and .NET) and offers features like auto-waiting, headless mode, parallel execution."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgPlaywright} />
        </HtmlTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Flutter</Typography>
              <b>{'Beginner'}</b> <u>{'About Flutter:'}</u>{' '}
              {"Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgFlutter} />
        </HtmlTooltip>

        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Python</Typography>
            <b>{'Beginner'}</b> <u>{'About Python:'}</u>{' '}
            {"Python is a programming language that lets you work quickly and integrate systems more effectively."}
          </React.Fragment>
        }
        >
          <ImageService src={ImgPython} />
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">MySQL</Typography>
              <b>{'Advanced'}</b> <u>{'About MySQL:'}</u>{' '}
              {"MySQL is an open source relational database management system used in most free applications to manage your databases."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgMysql} />  
        </HtmlTooltip>

        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">HTML5</Typography>
              <b>{'Advanced'}</b> <u>{'About HTML5:'}</u>{' '}
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
              <b>{'Advanced'}</b> <u>{'About CSS3:'}</u>{' '}
              {"CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgCss} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Bootstrap</Typography>
              <b>{'Advanced'}</b> <u>{'About Bootstrap:'}</u>{' '}
              {"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgBootstrap} />
          </HtmlTooltip>
                    
          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">GIT</Typography>
              <b>{'Advanced'}</b> <u>{'About GIT:'}</u>{' '}
              {"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."}
            </React.Fragment>
          }
          >
            <ImageService src={ImgGit} />
          </HtmlTooltip>

          <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Illustrator</Typography>
              <b>{'Advanced'}</b> <u>{'About Illustrator:'}</u>{' '}
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
              <b>{'Advanced'}</b> <u>{'About Figma:'}</u>{' '}
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
