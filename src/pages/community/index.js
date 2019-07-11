import React from 'react';
import ClubsLayout from '../../components/ClubsLayout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Styles from './styles.module.scss';
import Container from '../../components/Container';
import { runInDebugContext } from 'vm';
import Community from '../../images/Character.png'
import Link from 'gatsby-link'
import twitter from '../../images/twitter.png'
import Whatsapp from '../../images/whatsapp.png'
import Telegram from '../../images/telegram.png'
import gmail from '../../images/gmail.png'
import instagram from '../../images/instagram.png'
const Community_page=({data})=>{

    return (
        <ClubsLayout>
            <div >
            <Container>
                <div className={Styles.section}>
                    <div className={Styles.sectionHead}>

                    <p className={Styles.title}>Welcome to our Community page</p>

                    <p className={Styles.content}> A community driven by tech enthusiasts and open-source contribut
                        ors, to help young students to be part of the open-source ecosystem by p
                        roviding training and skill development.</p>

                        <div className={Styles.sectionlinks}>
                            
                    <Link className={`${Styles.button} ${Styles.Twitter}` }><img src={twitter} className={Styles.image}    height="20px" width="25px"></img>Follow on Twitter</Link>
                    <Link className={`${Styles.button} ${Styles.Whatsapp}` }><img src={Whatsapp} className={Styles.image}    height="20px" width="25px"></img>Join whatsapp group</Link>
                    <Link className={`${Styles.button} ${Styles.Instagram}` }><img src={instagram} className={Styles.image}    height="20px" width="25px"></img>Follow on instagram</Link>
                    <Link className={`${Styles.button} ${Styles.Telegram}` }><img src={Telegram} className={Styles.image}    height="20px" width="25px"></img>Telegram Channel</Link>
                    <Link className={`${Styles.button} ${Styles.Gmail}` }><img src={gmail} className={Styles.image}    height="20px" width="25px"></img>Subscribe to mail</Link>

                    </div>

                    </div>
                    <div className={Styles.imageSection}>
                    <Img className={Styles.heroimage} fluid={data.fileName.childImageSharp.fluid} alt="Community_image" />
                    </div>

                   
                </div>
               

            </Container>
           

                   
        </div>

        </ClubsLayout> 


    )
}

export default Community_page;

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/Character.png" }) {
      childImageSharp {
        fluid(maxWidth:1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`