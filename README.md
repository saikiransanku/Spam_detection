# Advanced Spam Detection System

Repository workspace organized into dedicated modules for the frontend UI, backend API, ML engine, research artifacts, and documentation.

## Repository Architecture

- **Frontend** ([frontend/](./frontend/)) — Next.js research console UI ([package.json](./frontend/package.json), [src/app/](./frontend/src/app/), [src/components/](./frontend/src/components/), [src/data/](./frontend/src/data/), [src/styles/](./frontend/src/styles/), [public/](./frontend/public/))
- **ML Engine** ([ml-engine/](./ml-engine/)) — Datasets, notebooks, modular ML source code, checkpoints, and experiments ([requirements.txt](./ml-engine/requirements.txt))
  - Datasets: [raw/](./ml-engine/datasets/raw/), [processed/](./ml-engine/datasets/processed/), [adversarial/](./ml-engine/datasets/adversarial/), [splits/](./ml-engine/datasets/splits/)
  - Notebooks: [01_data_analysis.ipynb](./ml-engine/notebooks/01_data_analysis.ipynb), [02_baseline_models.ipynb](./ml-engine/notebooks/02_baseline_models.ipynb), [03_transformer_training.ipynb](./ml-engine/notebooks/03_transformer_training.ipynb), [04_adversarial_training.ipynb](./ml-engine/notebooks/04_adversarial_training.ipynb), [05_hybrid_model.ipynb](./ml-engine/notebooks/05_hybrid_model.ipynb), [06_evaluation.ipynb](./ml-engine/notebooks/06_evaluation.ipynb)
  - Source: [preprocessing/](./ml-engine/src/preprocessing/), [augmentation/](./ml-engine/src/augmentation/), [features/](./ml-engine/src/features/), [models/](./ml-engine/src/models/), [training/](./ml-engine/src/training/), [evaluation/](./ml-engine/src/evaluation/)
  - Artifacts: [checkpoints/](./ml-engine/checkpoints/), [experiments/](./ml-engine/experiments/)
- **Backend** ([backend/](./backend/)) — API application layer ([app/routes/](./backend/app/routes/), [app/schemas/](./backend/app/schemas/), [app/services/](./backend/app/services/), [requirements.txt](./backend/requirements.txt))
- **Research** ([research/](./research/)) — [literature_review/](./research/literature_review/), [methodology/](./research/methodology/), [experiments/](./research/experiments/), [results/](./research/results/), [documentation/](./research/documentation/)
- **Documentation** ([docs/](./docs/)) — Project documentation and references

## Quick Start (Frontend)

```bash
cd frontend
npm install
npm run dev
```
