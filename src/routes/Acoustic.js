import React from 'react';
import styled from 'styled-components';
import {MainPageContent} from '../CommonStyledComponents';
import {Col, Row} from 'reactstrap';
import {PageHeader} from '../components/pageHeader';


const HomePageColumn = styled(Col)`
  color:#E0A607;
  margin:0;
  padding:50px;
  
  p {
    font-size:1.5rem;
    line-height:1.8rem;
    text-align:left;
    padding-left:25px; 
    padding-right:25px;

  }
  ul {
    max-width:350px;
    display:inline-block;
      
    li {
      font-family: 'Rye', cursive;
      font-weight:200;
      font-size:1.2rem;
      text-align:left;
    }
  }

`;


export default class Acoustic extends React.Component {


  render() {
    return (
      <MainPageContent>
        <HomePageColumn>
          <PageHeader SectionHeader="Acoustic"/>

          <p>
            Liquid Fun Acoustic is perfect for any occasion. We play a variety of tunes from the
            50's through today; country, blues to rock and pop. We can change our style to
            accommodate an intimate setting or a packed backyard bon-fire and anything in-between.
          </p>
          <p>
            Nick & Andy have been performing together for over 15 years. We are passionate and
            dedicated musicians who love to play live.
          </p>

          <p>Some of the songs we play:</p>

          <ul>
                <li>Whipping Post – Allman Bros</li>
                <li>Up On Cripple Creek – Band</li>
                <li>Don’t Bother Me – Beatles</li>
                <li>Going Down – J Beck</li>
                <li>Banana Boat Song – &nbsp;H. Belafonte​</li>
                <li>Chantilly Lace – Big Bopper</li>
                <li>Remedy - Black Crowes</li>
                <li>War Pigs – Black Sabbath</li>
                <li>Wanted Dead/Alive – Bon Jovi</li>
                <li>Minnie/Moocher – C Calloway</li>
                <li>Folsom Prison – J Cash</li>
                <li>Layla – E Clapton</li>
                <li>Shine – Collective Soul</li>
                <li>Another Saturday Night – S, Cooke</li>
                <li>Teen Angst – Cracker</li>
                <li>Proud Mary – CCR</li>
                <li>Don’t Mess W Jim – J Croce</li>
                <li>Friday I’m in Love – Cure</li>
                <li>Long Haired Country Boy – C Daniels </li>
                <li>Breakfast at Tiffany’s – Deep Blue Something</li>
                <li>Girl/Woman Soon – N Diamond</li>
                <li>Sweet Caroline – N. Diamond</li>
                <li>Walk of Life – Dire Straits</li>
                <li>Roadhouse Blues – Doors</li>
                <li>All Along/Watchtower – B Dylan</li>
                <li>Rainy Day Woman – B Dylan</li>
                <li>Save Tonight -&nbsp; Eagle Eyed Cherry</li>
                <li>What’s Up – 4 Non Blonds</li>
                <li>Tattooed Lady – R Gallagher</li>
                <li>I Will Survive – G. Gaynor</li>
                <li>Keep Hands/Yourself – GA Satellites</li>
                <li>Red House – J Hendrix</li>
                <li>Peggy Sue – B Holly</li>
                <li>You Were Meant for Me – Jewel</li>
                <li>Sweet Home Chicago – R Johnson</li>
                <li>Break Up Song – G Kihn Band</li>
                <li>Sunny Afternoon - Kinks</li>
                <li>Great Balls Fire – J.L. Lewis</li>
                <li>MS Queen - Mountain</li>
                <li>Jolene – D Parton</li>
                <li>Little Red Riding Hood – Sam/Sham Pharos</li>
                <li>American Girl – T Petty</li>
                <li>Mary Jane’s Last Dane – T Petty</li>
                <li>Blue Suede Shoes – E Presley</li>
                <li>Middle/Rd - Pretenders</li>
                <li>I'm Gonna Be (500 Miles) - Proclaimers</li>
                <li>Crazy Little Thing Called Love – Queen</li>
                <li>Kicks – P/R &amp; Raiders</li>
                <li>One I Love – REM</li>
                <li>Pop Song 89 - REM</li>
                <li>Secret Agent Man – J Rivers</li>
                <li>Dead Flowers – Rolling Stones</li>
                <li>Sympathy/Devil – Rolling Stones</li>
                <li>What I Like About You – Romantics</li>
                <li>Love Potion 9 – Searchers</li>
                <li>Turn the Page – B Seger</li>
                <li>Stray Cat Strut – B Setzer</li>
                <li>Bang Bang – N Sinatra</li>
                <li>Boots Made for Walking – N Sinatra</li>
                <li>Maggie May – R Stewart</li>
                <li>Interstate Love Song – STP</li>
                <li>Plush - STP</li>
                <li>What I Got – Sublime</li>
                <li>Love To Change/World – 10 Years After </li>
                <li>​Drunken Sailor – Traditional</li>
                <li>Dear Mr Fantasy – Traffic</li>
                <li>Handle W Care – Traveling Wilburys</li>
                <li>Desire – U2</li>
                <li>Kiss Off – Violent Femms</li>
                <li>Blister in the Sun – Violent Femms</li>
                <li>Life of Illusion – J. Walsh</li>
                <li>Messin w Kid &nbsp;- Jr Wells</li>
                <li>Squeeze Box – Who</li>
                <li>Guitars/Cadillac’s – D Yokum</li>
                <li>Fast as You – D Yokum</li>
              </ul>

        </HomePageColumn>

      </MainPageContent>
    );
  }
}