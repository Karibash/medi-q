/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import styled from '@emotion/styled';
import { createSerializer } from '@emotion/jest';

import { createMediQ } from '@medi-q/core';
import { ThemeProvider } from '@medi-q/emotion';

expect.addSnapshotSerializer(createSerializer());

document.documentElement.style.fontSize = '16px';
const mediQ = createMediQ({
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
});

describe('@medi-q/styled', () => {
  it('invalid query prefix', () => {
    expect(() => {
      const mock = jest.spyOn(console, 'error').mockImplementation(jest.fn());
      const Component = styled.div`
        ${props => {
          // @ts-ignore
          return props.theme.mediQ('invalid-tiny');
        }} {
          color: #000000;
        }
      `;

      render(
        <ThemeProvider theme={{}} mediQ={mediQ}>
          <Component />
        </ThemeProvider>,
      );
      expect(mock).toBeCalledTimes(1);
    }).toThrowErrorMatchingSnapshot();
  });

  it('invalid query breakpoint', () => {
    expect(() => {
      const mock = jest.spyOn(console, 'error').mockImplementation(jest.fn());
      const Component = styled.div`
        ${props => {
          // @ts-ignore
          return props.theme.mediQ('min-invalid');
        }} {
          color: #000000;
        }
      `;

      render(
        <ThemeProvider theme={{}} mediQ={mediQ}>
          <Component />
        </ThemeProvider>,
      );
      expect(mock).toBeCalledTimes(1);
    }).toThrowErrorMatchingSnapshot();
  });

  it('invalid query conjunctions', () => {
    expect(() => {
      const mock = jest.spyOn(console, 'error').mockImplementation(jest.fn());
      const Component = styled.div`
        ${props => {
          // @ts-ignore
          return props.theme.mediQ('min-tiny-invalid-max-small');
        }} {
          color: #000000;
        }
      `;

      render(
        <ThemeProvider theme={{}} mediQ={mediQ}>
          <Component />
        </ThemeProvider>,
      );
      expect(mock).toBeCalledTimes(1);
    }).toThrowErrorMatchingSnapshot();
  });

  it('min query', () => {
    const Component = styled.div`
      color: #000000;

      ${props => props.theme.mediQ('min-tiny')} {
        background: #000001;
      }

      ${props => props.theme.mediQ('min-small')} {
        background: #000002;
      }

      ${props => props.theme.mediQ('min-medium')} {
        background: #000003;
      }

      ${props => props.theme.mediQ('min-large')} {
        background: #000004;
      }
    `;

    const { container } = render(
      <ThemeProvider theme={{}} mediQ={mediQ}>
        <Component />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('max query', () => {
    const Component = styled.div`
      color: #000000;

      ${props => props.theme.mediQ('max-tiny')} {
        background: #000001;
      }

      ${props => props.theme.mediQ('max-small')} {
        background: #000002;
      }

      ${props => props.theme.mediQ('max-medium')} {
        background: #000003;
      }

      ${props => props.theme.mediQ('max-large')} {
        background: #000004;
      }
    `;

    const { container } = render(
      <ThemeProvider theme={{}} mediQ={mediQ}>
        <Component />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('composite query', () => {
    const Component = styled.div`
      color: #000000;

      ${props => props.theme.mediQ('min-tiny-and-max-tiny')} {
        background: #000001;
      }

      ${props => props.theme.mediQ('min-small-and-max-small')} {
        background: #000002;
      }

      ${props => props.theme.mediQ('min-medium-and-max-medium')} {
        background: #000003;
      }

      ${props => props.theme.mediQ('min-large-and-max-large')} {
        background: #000004;
      }

      ${props => props.theme.mediQ('max-tiny-or-min-tiny')} {
        background: #000005;
      }

      ${props => props.theme.mediQ('max-small-or-min-small')} {
        background: #000006;
      }

      ${props => props.theme.mediQ('max-medium-or-min-medium')} {
        background: #000007;
      }

      ${props => props.theme.mediQ('max-large-or-min-large')} {
        background: #000008;
      }
    `;

    const { container } = render(
      <ThemeProvider theme={{}} mediQ={mediQ}>
        <Component />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
