import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from '../components/Menu'

describe('Menu는', () => {
  it('fastcampus라는 텍스트를 가지고 있어야 한다', () => {
    // getByRole을 사용하면 html 요소를 Role을 기준으로 가져올 수 있다.
    const { getByText } = render(< Menu />)
    const menuText = getByText('fastcampas')

    expect(menuText).toBeInTheDocument();
  })
})