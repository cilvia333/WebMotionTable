import React from 'react';
import styled from '@emotion/styled';
import Card from '../components/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Colors } from '../assets/styles/constants';
import { Orbit } from '../components/contents/orbit';
import { StayTune } from '../components/contents/stayTune';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="WebMotionTable" />
      <Wrapper>
        <Table>
          <tbody>
            <tr>
              <Item>
                <Card name="Orbit" link="orbit">
                  <Orbit />
                </Card>
              </Item>
              <HiddenItem colSpan={16} />
              <Item>
                <Card name="FractalNoise" link="">
                  <StayTune />
                </Card>
              </Item>
            </tr>
            <tr>
              <Item>
                <Card name="Offset" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="LineWeight" link="">
                  <StayTune />
                </Card>
              </Item>
              <HiddenItem colSpan={10} />
              <Item>
                <Card name="LineWeight" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
            </tr>
            <tr>
              <Item>
                <Card name="Vegas" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="ShapeTransform" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <HiddenItem colSpan={9} />
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
              <Item>
                <Card name="Easing" link="">
                  <StayTune />
                </Card>
              </Item>
            </tr>
            <tr>
              <Item>Loop</Item>
              <Item>RepeatTransform</Item>
              <Item>Rhythm</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
            </tr>
            <tr>
              <Item>Loop</Item>
              <Item>RepeatTransform</Item>
              <Item>Rhythm</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
              <Item>TipShape</Item>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  padding: 50px;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid ${Colors.white};
  border-collapse: collapse;
  empty-cells: hide;
  width: 100%;
  table-layout: fixed;
`;

const Item = styled.td`
  color: ${Colors.white};
  padding: 0;
  border: 1px solid ${Colors.white};
  text-align: center;
  height: 50px;
  overflow-wrap: break-word;
`;

const HiddenItem = styled(Item)`
  border: hidden;
`;
