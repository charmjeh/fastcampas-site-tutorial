import { Category } from './../../interface/lecture';
import type { NextApiRequest, NextApiResponse } from 'next'

const mockCategory = {
  id: 0,
  name: '프로그래밍'
}

const mockTags = [
  {
    id: 0,
    title: '평생소장'
  },
  {
    id: 1,
    title: 'AWS'
  },
  {
    id: 2,
    title: 'DevOps'
  },
]

const lecturesDataForProgramming = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: mockTags,
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
  ]
}

const lecturesDataForDataScience = {
  lectureList: [
    {
      id: 0,
      category: mockCategory,
      title: '파이썬을 활용한 데이터 전처리 Level UP 올인원 패키지 Online.',
      tags: mockTags,
      description: '데이터 분석에 필요한 기초 전처리부터, 데이터의 품질 및 머신러닝 성능 향상을 위한 고급 스킬까지 완전 정복하는 데이터 전처리 트레이닝 온라인 강의입니다.',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 1,
      category: mockCategory,
      title: '파이썬을 활용한 데이터 전처리 Level UP 올인원 패키지',
      tags: mockTags,
      description: '데이터 분석에 필요한 기초 전처리부터, 데이터의 품질 및 머신러닝 성능 향상을 위한 고급 스킬까지 완전 정복하는 데이터 전처리 트레이닝 온라인 강의입니다.',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
    {
      id: 2,
      category: mockCategory,
      title: '파이썬을 활용한 데이터 전처리 Level UP 올인원 패키지',
      tags: mockTags,
      description: '데이터 분석에 필요한 기초 전처리부터, 데이터의 품질 및 머신러닝 성능 향상을 위한 고급 스킬까지 완전 정복하는 데이터 전처리 트레이닝 온라인 강의입니다.',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
  ]
}

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.query.categories === 'Programming') {
    res.status(200).json(lecturesDataForProgramming)
  }
  if (req.query.categories === 'DataScience') {
    res.status(200).json(lecturesDataForDataScience)
  }
}
