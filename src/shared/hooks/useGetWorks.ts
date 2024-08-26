import { createClient } from 'microcms-js-sdk';
import { useState, useEffect } from 'react';
import { MicroCMSWorksData } from '../../types';
import { WorksData } from '../../config/constants';

export const client = createClient({
  serviceDomain: import.meta.env.VITE_API_DOMAIN,
  apiKey: import.meta.env.VITE_API_KEY,
});

export const useGetWorks = () => {
  const [data, setData] = useState<WorksData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await client.get<{ contents: MicroCMSWorksData[] }>({
          endpoint: 'works',
        });
        const mappedData: WorksData[] = response.contents.map(item => ({
          title: item.title,
          gitHubUrl: item.gitHubUrl,
          siteUrl: item.siteUrl,
          src: item.imageSrc.url,
          alt: item.imageAlt,
          description: item.description,
          technology: item.technology,
        }));
        setData(mappedData);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return { data, loading, error };
};
