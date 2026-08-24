import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

export function useListData() {

    const [filter, setFilter] = useState('all')

    const { data, isLoading, error } = useQuery({
      queryKey: ['portfolioList',filter],
      queryFn: async () => {
            const res = await fetch('/data/data.json')
            const data = await res.json()

            if (filter === 'all') {
                return data
            }

            return data.filter((item: any) =>
                item.category.includes(filter)
            )
      },
    })
  
    return {
      filter,
      setFilter,
      data,
      isLoading,
      error,
    }
}
