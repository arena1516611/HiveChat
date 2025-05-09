'use client';
import React from 'react';
import { useParams } from 'next/navigation'
import Settings from "@/app/components/admin/llm/Settings";

const ProviderSettingPage = () => {
  const params = useParams();
  const provider = params.provider as string;
  return <Settings providerId={provider} />;
}

export default ProviderSettingPage