import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Card from '../components/card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Colors } from '../assets/styles/constants';
import { Orbit } from '../components/contents/orbit';

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
              <Item colSpan={16} />
              <Item>FractalNoise</Item>
            </tr>
            <tr>
              <Item>Offset</Item>
              <Item>LineWeight</Item>
              <Item colSpan={10} />
              <Item>FractalNoise</Item>
            </tr>
            <tr>
              <Item>Vegas</Item>
              <Item>ShapeTransform</Item>
              <Item>Easing</Item>
              <Item colSpan={9} />
              <Item>FractalNoise</Item>
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
