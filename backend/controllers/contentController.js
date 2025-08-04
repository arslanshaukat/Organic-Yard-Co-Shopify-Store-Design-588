import asyncHandler from '../utils/asyncHandler.js';
import Content from '../models/contentModel.js';

// @desc    Fetch all content
// @route   GET /api/content
// @access  Public
const getContents = asyncHandler(async (req, res) => {
  const contents = await Content.find({ isActive: true }).sort({ type: 1, order: 1 });
  res.json(contents);
});

// @desc    Fetch all content by type
// @route   GET /api/content/type/:type
// @access  Public
const getContentsByType = asyncHandler(async (req, res) => {
  const type = req.params.type;
  const validTypes = ['hero', 'about', 'testimonial', 'benefit', 'faq', 'policy'];
  
  if (!validTypes.includes(type)) {
    res.status(400);
    throw new Error('Invalid content type');
  }
  
  const contents = await Content.find({ type, isActive: true }).sort({ order: 1 });
  res.json(contents);
});

// @desc    Fetch single content
// @route   GET /api/content/:id
// @access  Public
const getContentById = asyncHandler(async (req, res) => {
  const content = await Content.findById(req.params.id);

  if (content) {
    res.json(content);
  } else {
    res.status(404);
    throw new Error('Content not found');
  }
});

// @desc    Create content
// @route   POST /api/content
// @access  Private/Admin
const createContent = asyncHandler(async (req, res) => {
  const { type, title, subtitle, content, image, order, metadata } = req.body;

  const newContent = new Content({
    type,
    title,
    subtitle: subtitle || '',
    content: content || '',
    image: image || '',
    order: order || 0,
    metadata: metadata || {},
  });

  const createdContent = await newContent.save();
  res.status(201).json(createdContent);
});

// @desc    Update content
// @route   PUT /api/content/:id
// @access  Private/Admin
const updateContent = asyncHandler(async (req, res) => {
  const { type, title, subtitle, content, image, order, isActive, metadata } = req.body;

  const contentItem = await Content.findById(req.params.id);

  if (contentItem) {
    contentItem.type = type || contentItem.type;
    contentItem.title = title || contentItem.title;
    contentItem.subtitle = subtitle !== undefined ? subtitle : contentItem.subtitle;
    contentItem.content = content !== undefined ? content : contentItem.content;
    contentItem.image = image !== undefined ? image : contentItem.image;
    contentItem.order = order !== undefined ? order : contentItem.order;
    contentItem.isActive = isActive !== undefined ? isActive : contentItem.isActive;
    contentItem.metadata = metadata || contentItem.metadata;

    const updatedContent = await contentItem.save();
    res.json(updatedContent);
  } else {
    res.status(404);
    throw new Error('Content not found');
  }
});

// @desc    Delete content
// @route   DELETE /api/content/:id
// @access  Private/Admin
const deleteContent = asyncHandler(async (req, res) => {
  const content = await Content.findById(req.params.id);

  if (content) {
    // Instead of deleting, mark as inactive
    content.isActive = false;
    await content.save();
    res.json({ message: 'Content removed' });
  } else {
    res.status(404);
    throw new Error('Content not found');
  }
});

export {
  getContents,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
  getContentsByType,
};