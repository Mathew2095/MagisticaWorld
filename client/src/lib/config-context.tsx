import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { SiteConfig, DEFAULT_SITE_CONFIG } from "@shared/schema";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ConfigContextType {
  config: SiteConfig | null;
  loading: boolean;
  error: Error | null;
  updateConfig: (newConfig: Partial<SiteConfig>) => Promise<void>;
  resetConfig: () => Promise<void>;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<Error | null>(null);

  // Fetch site configuration
  const { data: config, error: fetchError, isLoading: loading, refetch } = useQuery({
    queryKey: ['/api/config'],
    staleTime: 300000, // 5 minutes
  });

  // Update site configuration
  const updateConfigMutation = useMutation({
    mutationFn: async (newConfig: Partial<SiteConfig>) => {
      await apiRequest('PATCH', '/api/config', newConfig);
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      setError(error instanceof Error ? error : new Error('Failed to update configuration'));
    }
  });

  // Reset site configuration
  const resetConfigMutation = useMutation({
    mutationFn: async () => {
      await apiRequest('POST', '/api/config/reset', {});
    },
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      setError(error instanceof Error ? error : new Error('Failed to reset configuration'));
    }
  });

  useEffect(() => {
    if (fetchError) {
      setError(fetchError instanceof Error ? fetchError : new Error('Failed to fetch configuration'));
    }
  }, [fetchError]);

  const updateConfig = async (newConfig: Partial<SiteConfig>) => {
    await updateConfigMutation.mutateAsync(newConfig);
  };

  const resetConfig = async () => {
    await resetConfigMutation.mutateAsync();
  };

  return (
    <ConfigContext.Provider 
      value={{ 
        config: config || null, 
        loading, 
        error, 
        updateConfig,
        resetConfig
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
