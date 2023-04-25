import React, { useState, DOMAttributes }  from 'react';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['gradio-app']: CustomElement;
    }
  }
}